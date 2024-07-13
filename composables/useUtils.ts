interface Dates {
    START_DATE: string;
    END_DATE: string;
}

interface Endpoint {
    BACKEND_ENDPOINT: string;
    DATES: Dates;
}

interface Endpoints {
    dev: Endpoint;
    stg: Endpoint;
    prd: Endpoint;
    bucket: Endpoint
}

export function useUtils(){
    const DATES_ALL: Dates = {
        START_DATE: '2022-10-15T13:00:00Z', // 10/15, 9 AM EST
        END_DATE: '2022-10-16T21:00:00Z' // 10/16, 5 PM EST
    }

    const endpoints: Endpoints = {
        dev: {
            BACKEND_ENDPOINT: 'https://tnofke68f9.execute-api.us-east-1.amazonaws.com',
            DATES: DATES_ALL
        },
        stg: {
            BACKEND_ENDPOINT: 'https://5o4m54dteb.execute-api.us-east-1.amazonaws.com',
            DATES: DATES_ALL
        },
        prd: {
            BACKEND_ENDPOINT: 'https://j9swf7gf5e.execute-api.us-east-1.amazonaws.com',
            DATES: DATES_ALL
        },
        bucket: {
            BACKEND_ENDPOINT: 'https://arfv6rkvu2.execute-api.us-east-1.amazonaws.com/signature',
            DATES: DATES_ALL
        }
    }
 
    const getCurrentEnvironment = (): string => {
        if (window.location.href === 'https://gotechnica.org/register') {
            return 'prd'
        }

        if (window.location.href === 'https://gotechnica.org/register/') {
            return 'prd'
        }

        if (window.location.href === 'https://pr-201.d22tefb47u3z2s.amplifyapp.com/register') {
            return 'prd'
        }

        if (window.location.href === 'https://www.gotechnica.org/register') {
            return 'prd'
        }

        if (window.location.href === 'https://gotechnica.org/Register') {
            return 'prd'
        }

        if (window.location.href === 'https://gotechnica.org/Register/') {
            return 'prd'
        }

        if (window.location.href === 'https://gotechnica.org/Register/') {
            return 'prd'
        }

        if (window.location.href === 'https://www.gotechnica.org/Register') {
            return 'prd'
        }

        if (window.location.href.includes("gotechnica.org")) {
            return 'prd'
        }
        
        if (window.location.href === 'https://main.d3d372rpngjchf.amplifyapp.com/register/') {
            return 'dev'
        }

        return 'dev'
    }

    const getEnvVariable = (variableName: keyof Endpoint): (string | Dates) => {
        const currentEnvironment:string = getCurrentEnvironment();
        return endpoints[currentEnvironment as keyof typeof endpoints][variableName];
    };

    const performGetRequest = async (baseUrl: string, endpoint: string) => {
        const stage = getCurrentEnvironment()
        try{
            const result = await useFetch(`${baseUrl}/${stage}/${endpoint}`, {method: "GET"})
            return result.data
        } catch (e: any){
            console.error(e.repsonse.data)
            return null
        }
    }

    const performPostRequest = async (baseUrl: string, endpoint: string, parameters: any) => {
        const stage = getCurrentEnvironment()
        try {
            const result = await useFetch(`${baseUrl}/${stage}/${endpoint}`, {method: "POST", body: parameters})
            return result
        } catch (e: any) {
            console.error(e.response.data)
            console.error(e.response)
            return null
        }
    }

    return {
        getCurrentEnvironment, 
        getEnvVariable,
        performGetRequest,
        performPostRequest, 
        endpoints, 
        DATES_ALL
    }
}