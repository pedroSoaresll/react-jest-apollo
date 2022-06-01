import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../libs/apollo";

interface RenderWithProvidersProps {
    children?: React.ReactNode
}

export const WithProviders: React.FC<RenderWithProvidersProps> = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}