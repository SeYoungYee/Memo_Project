import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryClientSetUp = ({children}) => {
    return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
};

export default QueryClientSetUp;