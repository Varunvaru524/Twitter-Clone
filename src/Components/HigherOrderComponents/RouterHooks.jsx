import { useNavigate, useLocation, useParams, useSearchParams, } from "react-router-dom";

const RouterHooks = ({ Component, ...rest }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    
    return (
        <Component
            navigate={navigate}
            location={location}
            params={params}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            {...rest}
        />
    );
};

RouterHooks.defaultProps = {
    // Must send a React Component
    Component: null,
};

export default RouterHooks;
