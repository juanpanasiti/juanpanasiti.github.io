import { GraphQLClient, ClientContext } from 'graphql-hooks';
import env from "react-dotenv";

import { RouterApp } from './routes/RouterApp';

const client = new GraphQLClient({
    url: 'https://graphql.datocms.com/',
    headers: {
        'Authorization': `Bearer ${env.DATOCMS_API_KEY}`
    }
});

function App() {
    return (
        <ClientContext.Provider value={client}>
            <RouterApp />
        </ClientContext.Provider>
    );
}

export default App;
