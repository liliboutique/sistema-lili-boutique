#!/bin/bash
export DEBIAN_FRONTEND=noninteractive

echo "========================================"
echo " Instalando Lili Boutique en Termux...  "
echo "========================================"

echo "[1/4] Limpiando el teléfono e instalando base..."
# Esto borra instalaciones viejas para evitar el error del fantasma
rm -rf ~/mi_sistema
apt-get update -y
apt-get upgrade -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold"
pkg install nodejs git -y

echo "[2/4] Clonando el repositorio..."
git clone https://github.com/eduarbermudezz/sistema-lili-boutique.git mi_sistema

echo "[3/4] Configurando el Backend y Credenciales reales..."
cd mi_sistema/backend

# Inyectamos tus credenciales reales directamente
cat << 'EOF' > .env
PORT=8080
JWT_SECRET=MiSuperSecretoSeguroParaElSistemaLiliBoutique!
DB_HOST=gateway01.us-east-1.prod.aws.tidbcloud.com
DB_USER=2M37pEcncK4PQQW.root
DB_PASSWORD=bR6MwGDDc2kltGHB
DB_NAME=sistema
DB_PORT=4000
GOOGLE_CLIENT_ID=656412769485-inkodkdkpn5k6bmepntpu904k6v0vuh8.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_REFRESH_TOKEN=1//04SzKyTALGPRECgYIARAAGAQSNwF-L9IrsnuZbljwXgEBqX98Id-46rwVWMS4zqYeCgjjM_i0h2QJR8nTg5gCKHsZdvRLe0IAeJw
GOOGLE_DRIVE_FOLDER_ID=17X58XY09ExZm9-pE1D-nlBlqevD3RSE5
API_BCV_URL=https://www.bcv.org.ve/
API_EXCHANGE_URL=https://api.exchangerate-api.com/v4/latest/USD
EOF

# Instalamos los módulos del backend
npm install

echo "[4/4] Configurando el inicio automático..."
cat << 'EOF' > ~/.bashrc
clear
echo "Iniciando Lili Boutique..."
cd ~/mi_sistema/backend
node server.js
EOF

echo "========================================"
echo " ¡Instalación completada con éxito!     "
echo " Cierra esta ventana y vuelve a abrir   "
echo " Termux para arrancar el servidor.      "
echo "========================================"