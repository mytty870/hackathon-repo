'use client'
import { Button } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import React from 'react'

export const LoginButtonGroup = () => {
  const callbackUrl = 'http://localhost:3000/es-feedback'
  return (
    <>
      <Button
        className="mb-3 flex w-full items-center justify-center gap-2 rounded border border-gray-300 py-2"
        color="primary"
        onClick={() => signIn('google', { callbackUrl: callbackUrl })}
        startContent={
          <svg viewBox="0 0 533.5 544.3" height="18" width="18">
            <title>google-colored</title>
            <path
              d="M533.5,278.4a320.07,320.07,0,0,0-4.7-55.3H272.1V327.9h147a126,126,0,0,1-54.4,82.7v68h87.7C503.9,431.2,533.5,361.2,533.5,278.4Z"
              fill="#4285f4"
            ></path>
            <path
              d="M272.1,544.3c73.4,0,135.3-24.1,180.4-65.7l-87.7-68c-24.4,16.6-55.9,26-92.6,26-71,0-131.2-47.9-152.8-112.3H28.9v70.1A272.19,272.19,0,0,0,272.1,544.3Z"
              fill="#34a853"
            ></path>
            <path
              d="M119.3,324.3a163,163,0,0,1,0-104.2V150H28.9a272.38,272.38,0,0,0,0,244.4Z"
              fill="#fbbc04"
            ></path>
            <path
              d="M272.1,107.7a147.89,147.89,0,0,1,104.4,40.8h0l77.7-77.7A261.56,261.56,0,0,0,272.1,0,272.1,272.1,0,0,0,28.9,150l90.4,70.1C140.8,155.6,201.1,107.7,272.1,107.7Z"
              fill="#ea4335"
            ></path>
          </svg>
        }
      >
        Googleで登録
      </Button>
      <Button
        className="mb-3 flex w-full items-center justify-center gap-3 rounded border border-gray-300 py-2"
        color="primary"
        startContent={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="18"
            height="18"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        }
      >
        githubで登録
      </Button>
    </>
  )
}
