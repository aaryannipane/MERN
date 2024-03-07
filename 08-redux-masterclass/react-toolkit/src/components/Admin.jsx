import React from "react";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../store/api/adminSlice";

export const Admin = () => {
  const { data, error, isLoading } = useGetAccountsQuery();

  const [addAccount, response] = useAddAccountMutation();
  const [deleteAccount, deleteResponse] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  return (
    <div>
      <h1>Admin</h1>
      <p>
        <em>RTK example</em>
      </p>
      <div>
        {data &&
          data.map((account) => (
            <p>
              {account.id} : {account.amount}{" "}
              <button onClick={() => deleteAccount(account.id)}>
                delete account
              </button>
              <button onClick={() => updateAccount({id:account.id, amount:777})}>
                update account
              </button>
            </p>
          ))}
      </div>
      <button onClick={() => addAccount(1220, data.length + 1)}>
        add account
      </button>
    </div>
  );
};
