import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { XCircleIcon } from '@heroicons/react/24/solid'

export default function Alert({success}) {
  return (
    <div className="rounded-md bg-green-50 p-4 m-4">
      <div className="flex">
        <div className="flex-shrink-0">
        {success ? (
            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
          ) : (
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          )}
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${success ? 'text-green-800' : 'text-red-800'}`}><span className="mt-2 text-sm text-green-700">
          {success ?<span>Thank You, for contacting me!</span>: <span>Sorry! There was an error while sending the email! Please try again later.</span>}</span></h3> 
        </div>
      </div>
    </div>
  )
}
