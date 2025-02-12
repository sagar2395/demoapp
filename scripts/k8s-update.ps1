

$env = "prod"

# Builds and pushes the images
docker-compose -f .\docker-compose.base.yml -f .\docker-compose.$env.yml build

if($env -eq "prod") {
   docker-compose -f .\docker-compose.base.yml -f .\docker-compose.$env.yml push
}
# Pushes the images to the registry


# Updates the k8s deployment
kubectl delete -k .\manifests\overlays\$env
kubectl apply -k .\manifests\overlays\$env

# For minikube
minikube tunnel 