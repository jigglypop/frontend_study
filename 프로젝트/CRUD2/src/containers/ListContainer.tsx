import { useLazyQuery } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorHandle from 'src/components/common/ErrorHandle';
import ListComponent from 'src/components/list/listComponent';
import { LIST } from 'src/gql/list';
import { RootState } from 'src/modules';
import { listSuccess } from 'src/modules/list/actions';

const ListContainer = () => {
    const [page, setPage] = useState<number>(1)
    const dispatch = useDispatch();
    const { list } = useSelector(({ list }: RootState) =>({ 
        list: list.list,
    }))

    const [addList, { loading: mutationLoadingList, error: mutationErrorList, data:dataList }] = useLazyQuery(LIST,
        { variables: { page: page } }
    );

    useEffect(() => {
        addList()
    }, [])
    useEffect(()=>{
        if (dataList){
            dispatch(listSuccess(dataList.listPosts))
        }
    },[dispatch, dataList])
    return (
        <>
            <ListComponent
                list={list? list : undefined}
            />
            <ErrorHandle 
                mutationLoading={mutationLoadingList}
                mutationError={mutationErrorList}
            />  
        </>
    )
}
export default withRouter(ListContainer)