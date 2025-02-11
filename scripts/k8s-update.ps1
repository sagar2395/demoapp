docker-compose -f .\docker-compose.base.yml -f .\docker-compose.prod.yml build
docker-compose -f .\docker-compose.base.yml -f .\docker-compose.prod.yml push
kubectl delete -k .\manifests\overlays\prod
kubectl apply -k .\manifests\overlays\prod