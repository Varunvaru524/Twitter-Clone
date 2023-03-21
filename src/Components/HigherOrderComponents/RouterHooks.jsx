import {useNavigate,useLocation,useParams,useSearchParams} from 'react-router-dom'

const RouterHooks = ({Component}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    return ( 
        <Component navigate={navigate} location={location} params={params} />
     );
}

RouterHooks.defaultProps = {
    // Must send a React Component
    Component:null
}
 
export default RouterHooks;

