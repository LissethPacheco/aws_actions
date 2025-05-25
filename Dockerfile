# Usa la imagen oficial de nginx
FROM nginx:alpine

# Copia el archivo index.html al directorio predeterminado de nginx
COPY index.html /usr/share/nginx/html/

# Exponer el puerto 80 para el servidor
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
