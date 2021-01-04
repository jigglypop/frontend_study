import { useLazyQuery } from "@apollo/react-hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export interface getLazyQueryTypes {
    GQL : any, 
    variables : object, 
    requestSuccess : any,
    requestFailure : any
}

export const getLazyQuery = (GQL:any, variables: any, requestSuccess: any, requestFailure : any)  =>{
    const dispatch = useDispatch();
    const [addResult, { loading: mutationLoadingResult, error: mutationErrorResult, data : dataResult }] = useLazyQuery(GQL,
        { variables: variables }
    );
    useEffect(()=>{
        addResult()
    },[])
    useEffect(() => {
        if (dataResult){
            dispatch(requestSuccess(dataResult.readComment.comments))
        } else if (mutationErrorResult && !dataResult){
            dispatch(requestFailure(dataResult.message))
        }
    }, [dispatch, dataResult, mutationErrorResult])

}
