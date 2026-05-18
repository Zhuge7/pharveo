#!/bin/bash
# =============================================================================
# setup-vps.sh — Configuration initiale du VPS pour Pharveo (one-shot)
# A exécuter UNE SEULE FOIS en SSH sur le VPS Xakili, depuis le dossier projet.
#
# Usage :
#   ssh xakili@<vps-ip>
#   bash setup-vps.sh
#
# Prérequis :
#   - nginx installé sur le VPS
#   - certbot installé (apt install certbot python3-certbot-nginx)
#   - Le DNS pharveo.xakili.io pointe déjà vers l'IP du VPS
#   - L'utilisateur xakili a les droits sudo
# =============================================================================

set -euo pipefail

DOMAIN="pharveo.xakili.io"         # <-- adapter si domaine différent
WEB_ROOT="/var/www/pharveo"
NGINX_AVAILABLE="/etc/nginx/sites-available/pharveo"
NGINX_ENABLED="/etc/nginx/sites-enabled/pharveo"
NGINX_CONF_SRC="$(dirname "$0")/../nginx/pharveo.conf"

echo "=== [1/4] Création du dossier web ==="
sudo mkdir -p "$WEB_ROOT"
sudo chown -R xakili:www-data "$WEB_ROOT"
sudo chmod -R 755 "$WEB_ROOT"
echo "    OK : $WEB_ROOT créé"

echo "=== [2/4] Installation du vhost nginx ==="
sudo cp "$NGINX_CONF_SRC" "$NGINX_AVAILABLE"
if [ ! -L "$NGINX_ENABLED" ]; then
    sudo ln -s "$NGINX_AVAILABLE" "$NGINX_ENABLED"
fi
sudo nginx -t
echo "    OK : vhost installé et syntaxe nginx validée"

echo "=== [3/4] Obtention du certificat SSL Let's Encrypt ==="
# Certbot va modifier le vhost pour injecter les chemins SSL
# Le --nginx plugin recharge nginx automatiquement
sudo certbot --nginx -d "$DOMAIN" \
    --non-interactive \
    --agree-tos \
    --email automat.zlai@gmail.com \
    --redirect
echo "    OK : certificat SSL obtenu pour $DOMAIN"

echo "=== [4/4] Rechargement nginx ==="
sudo systemctl reload nginx
echo "    OK : nginx rechargé"

echo ""
echo "=== Setup terminé ==="
echo "    Site accessible : https://$DOMAIN"
echo "    Fichiers web    : $WEB_ROOT"
echo "    Logs nginx      : /var/log/nginx/pharveo-*.log"
echo ""
echo "Prochaine étape : configurer les GitHub Secrets et pousser sur main."
echo "Le déploiement initial sera déclenché automatiquement par le workflow."
