import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useUpdateUser() {
    const queryClient = useQueryClient();

    const { mutate: updateUser, status } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: ({ user }) => {
            toast.success("User has been updated");
            queryClient.invalidateQueries('user');
        },
        onError: (err) => {
            console.error(err);
            toast.error("Cannot update this user");
        }
    });

    return { updateUser, status };
}
