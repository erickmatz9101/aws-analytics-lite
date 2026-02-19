# AWS ANALYTICS LITE #
Plataforma de analítica ligera para PyMEs con arquitectura serverless y prácticas DevOps.
## 📌 Descripción
**AWS Analytics Lite** es una plataforma de analítica modular diseñada para demostrar cómo una solución puede escalar desde un prototipo local hasta una arquitectura en la nube.  

El proyecto integra un **dashboard interactivo para PyMEs**, con métricas clave de ventas, productos, inventario, clientes y finanzas. Más allá de las gráficas, este caso de estudio muestra la evolución completa de una solución: desde datos simulados, pasando por persistencia real con SQLite, hasta su futura migración a **AWS** con prácticas de **DevOps y Solution Architecture**.  

## 🚀 Evolución del proyecto - **Fase 1:** Backend con datos simulados en arrays.
- **Fase 2:** Persistencia real con **SQLite**, ampliada a 15+ registros por tabla para enriquecer las gráficas. -
- **Fase 3 (planeada):** Migración a **AWS** (RDS/DynamoDB para base de datos, Amplify/S3+CloudFront para frontend, Elastic Beanstalk/EC2 para backend).
- **Fase 4 (planeada):** Integración de CI/CD con GitHub Actions y despliegue automatizado en AWS.

## 🏗️ Arquitectura actual - **Frontend:** React + Vite + Chart.js -
**Backend:** Express.js -
**Base de datos:** SQLite (persistencia local con tablas de ventas, productos, inventario, clientes y finanzas) -
**Flujo de datos:** 1. El frontend consume endpoints REST del backend. 2. El backend consulta SQLite y devuelve resultados en JSON. 3. 
El frontend renderiza gráficas interactivas con esos datos.

## 🔮 Próximos pasos - Migrar la base de datos a **AWS RDS/DynamoDB**. 
- Desplegar el backend en **Elastic Beanstalk/EC2**.
-  - Publicar el frontend en **Amplify/S3+CloudFront**.
- Configurar **CI/CD con GitHub Actions** para despliegue automatizado.

## ✅ Enfoque estratégico Este proyecto demuestra cómo un prototipo local puede convertirse en un **caso de estudio narrativo** de DevOps y arquitectura de soluciones: - **De arrays simulados → a persistencia real → a despliegue en la nube.**








