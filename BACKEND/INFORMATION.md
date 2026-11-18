###### INFORMATION.md >> markdown 
# LaRST
- * **v1.1.0**

### ✅ Ordre d’exécution recommandé 
1. * **sur ta machine**.
- Mets à jour *backend/.env avec JWT_SECRET et installe bcryptjs + jsonwebtoken*.

2. * **Lance npm run migrate dans backend/ pour appliquer la migration SQL**.

3. *Crée un premier compte* **admin en base (ou via un script seed**)
>> *pour tester*
- **POST /api/auth/login**
- **GET /api/auth/me**
