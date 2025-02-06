import { useMutation } from '@tanstack/react-query'

interface useMutationCustomProps {
  fn?: () => Promise<void>;
  isSuccess?: () => void;
  isError?: () => void;
}

const useMutationCustom = ({fn, isSuccess, isError}:useMutationCustomProps) => {
  return (
    useMutation({
      mutationFn: fn,
      onError: () => {
        if (isError) isError()
      },
      onSuccess: () => {
        if (isSuccess) isSuccess()
      },
    })
  )
}

export default useMutationCustom
