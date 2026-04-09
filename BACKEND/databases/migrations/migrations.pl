#!/usr/bin/env perl
# ============================================================
# La RST — Script de migration PostgreSQL
# migration.pl
# Exécute toutes les migrations SQL dans l'ordre
# ============================================================

use strict;
use warnings;
use File::Basename;
use File::Spec;

# Chargement du .env
my $env_file = "../../config/.env";
open my $env, '<', $env_file or die "Impossible d'ouvrir $env_file: $!";
while (<$env>) {
    chomp;
    next if /^#/;
    next unless /=/;
    my ($key, $value) = split /=/, $_, 2;
    $ENV{$key} = $value;
}
close $env;

my $dir = File::Spec->catdir(dirname(__FILE__), "sql");

opendir(my $dh, $dir) or die "Impossible d'ouvrir $dir: $!";
my @files = sort grep { /\.sql$/ } readdir($dh);
closedir($dh);

foreach my $file (@files) {
    my $path = File::Spec->catfile($dir, $file);
    print "==> Migration : $file\n";

    my $cmd = sprintf(
        "psql -h %s -U %s -d %s -f %s",
        $ENV{'DB_HOST'},
        $ENV{'DB_USER'},
        $ENV{'DB_NAME'},
        $path
    );

    system($cmd) == 0
        or die "Erreur lors de l'exécution de $file\n";
}

print "Toutes les migrations ont été appliquées.\n";
