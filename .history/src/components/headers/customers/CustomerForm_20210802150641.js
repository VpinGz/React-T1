import React from 'react';

const CustomerForm = () =>{
    const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);
    return(
        <h1>post</h1>
        
    );
}
export default CustomerForm;
