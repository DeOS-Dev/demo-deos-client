import { deosClient } from 'deos-client';

// Initialize the DeosClient
var client = deosClient(window.apiKey, window.endpoint);

(function () {
    const DEOS_RETRY_TIMEOUT_MS = 5000;
    const DEFAULT_OPTIONS = { intervalMs: DEOS_RETRY_TIMEOUT_MS };

    const run = async (app_instance) => {
        console.log('running app: ' + app_name);
        const response = await client.run(app_instance, DEFAULT_OPTIONS);
        return { instance: app_instance, url: response.url };
    }

    const deos = {
        instances: async(app_name) => {
            console.log('getting instances: ' + app_name);
            return await client.getAllInstances(app_name);
        },

        launch: async (app_name, app_instance) => {
            console.log('launch: App Name:[' + app_name + '] App Instance: [' + app_instance + ']');

            if (app_instance && app_instance !== '') {
                return await run(app_instance, DEFAULT_OPTIONS);
            }

            return await client.launch(app_name, DEFAULT_OPTIONS);
        },

        close: async (app_instance) => {
            if (!app_instance || app_instance === '') return;
            
            const response = await client.delete(app_instance);
            if (response) {
                console.log('app instance deleted');
            } else {
                console.log('app instance failed to delete');
            }
        },

        quota: async (app_name) => {
            return await client.getQuota(app_name);
        },

        testConnection: async () => {
            return await client.testConnection();
        }
    };
  
    window.deos = deos;
})();
