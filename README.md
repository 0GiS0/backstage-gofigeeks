# 🧡 GofiGeeksOrg 🎸 Backstage IDP 💻

<div align="center">

[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UC140iBrEZbOtvxWsJ-Tb0lQ?style=for-the-badge&logo=youtube&logoColor=white&color=red)](https://www.youtube.com/c/GiselaTorres?sub_confirmation=1)
[![GitHub followers](https://img.shields.io/github/followers/0GiS0?style=for-the-badge&logo=github&logoColor=white)](https://github.com/0GiS0)
[![LinkedIn Follow](https://img.shields.io/badge/LinkedIn-Sígueme-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giselatorresbuitrago/)
[![X Follow](https://img.shields.io/badge/X-Sígueme-black?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/0GiS0)

</div>

¡Hola developer 👋🏻! En este repo encontrarás el código que usé durante el evento de GofiGeeks para arrancar una instancia de Backstage.

<p align="center">
  <img width="720" height="405" alt="Desarrolladores más felices y productivos con Platform Engineering" src="https://github.com/user-attachments/assets/0c40e173-164b-4833-8ccd-7a3fe1bc2b03" />
</p>

## 🎯 ¿Qué es Backstage?

Backstage es una plataforma abierta para crear portales para desarrolladores. Ayuda a los desarrolladores a descubrir y comprender todos los servicios y el software de tu organización, y proporciona una experiencia unificada para acceder a herramientas, documentación y plantillas.

## Requisitos

Para poder ejecutar Backstage necesitas:

- Node.js 20
- Una instancia de Postgress
- Docker para TechDocs
  
La forma más sencilla de poder arrancar este proyecto es abrir el mismo dentro de un dev container, ya que este viene con la configuración para poder tener todo lo que necesitas dentro del mismo. Si no sabes de qué te estoy hablando puedes echar un vistazo a este vídeo de mi canal de YouTube:

<a href="https://youtu.be/DkKs29etRis">
                <img src="https://img.youtube.com/vi/DkKs29etRis/maxresdefault.jpg" alt="⚡🤖 Controla las respuestas de la IA: outputs estructurados 📊 | Cap. 9" width="100%" /></a>


### Configurar la instancia de Backstage

La idea es que esta instancia de Backstage esté conectada con la organización que se configuró [gracias a este otro repo](https://github.com/0GiS0/ghec-org-gofigeeks). Por lo que necesitas la configuración necesaria para poder hacerlo realidad.

En el archivo `backstage/app-config.local.example.yaml` tienes un ejemplo de todo lo que necesitas configurar. 

Para poder comunicar Backstage con GitHub en este ejemplo se necesita de una GitHub App con los permisos necesario. 

#### 🔐 Permisos de la GitHub App (imprescindibles)

- Organización:
   - Custom properties: Read and write
- Repositorio:
   - Actions: Read and write
   - Administration: Read and write
   - Code scanning alerts: Read
   - Contents: Read and write
   - Custom properties: Read and write 
   - Metadata: Read
   - Workflows: Read and write

Cuando instales la aplicación en la organizavión debes seleccionar: `Acceso a repositorios: All repositories`. Una vez la tengas debes generar una clave privada y esto descargará un certificado, del cual debes copiar el contenido para pegarlo en un archivo llamado `backstage/github-app-credentials.yaml`con la misma estructura que el ejemplo en `backstage/github-app-credentials.yaml`.

También debes configurar:

- Una aplicación OAuth dentro de la organización de Github para poder logarte con los usuarios de la misma y añadir el client id y el client secret en el archivo `backstage/app-config.local.yaml`
- La sección `catalog`para poder conectarte con tu organización. Hay un ejemplo en `backstage/app-config.yaml`


Si quieres saber más sobre Platform Engineering (y Backstage) te recomiendo que eches un vistazo a mi serie:

<a href="https://www.youtube.com/playlist?list=PLO9JpmNAsqM6RttdyDmPyW0vR_zf20ETI">
<img width="1280" height="720" alt="1  Introducción Platform Engineering" src="https://github.com/user-attachments/assets/5bbdaff4-fab0-46c2-ac61-39364f1db1b1" />
</a>


### 🎯 ¿Te ha resultado útil este contenido?

**¡La mejor forma de agradecerlo es con una suscripción!** 

Cada nuevo suscriptor me motiva a seguir creando contenido de calidad y mantener estos repositorios actualizados. 

[![Suscríbete Ahora](https://img.shields.io/badge/🔔%20SUSCRÍBETE%20AHORA-red?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/c/GiselaTorres?sub_confirmation=1)

¡Nos vemos 👋🏻!
