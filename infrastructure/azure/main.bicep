param location string = resourceGroup().location
param aksClusterName string
param dnsPrefix string
param agentCount int = 3
param agentVMSize string = 'Standard_DS2_v2'

resource aksCluster 'Microsoft.ContainerService/managedClusters@2021-05-01' = {
    name: aksClusterName
    location: location
    properties: {
        dnsPrefix: dnsPrefix
        agentPoolProfiles: [
            {
                name: 'agentpool'
                count: agentCount
                vmSize: agentVMSize
                osType: 'Linux'
                mode: 'System'
            }
        ]
        linuxProfile: {
            adminUsername: 'azureuser'
            ssh: {
                publicKeys: [
                    {
                        keyData: '<your-ssh-public-key>'
                    }
                ]
            }
        }
        servicePrincipalProfile: {
            clientId: '<your-service-principal-client-id>'
            secret: '<your-service-principal-client-secret>'
        }
    }
}

output aksClusterName string = aksCluster.name
output aksClusterFqdn string = aksCluster.properties.fqdn