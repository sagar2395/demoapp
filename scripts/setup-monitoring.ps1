kubectl apply -f .\manifests\common\monitoring.yaml # Updates common resources

cd manifests/common
git clone https://github.com/prometheus-operator/kube-prometheus.git
cd kube-prometheus

kubectl apply --server-side -f manifests/setup
kubectl apply -f manifests/

kubectl port-forward svc/grafana 3000 -n monitoring
kubectl port-forward svc/prometheus-k8s 9090 -n monitoring