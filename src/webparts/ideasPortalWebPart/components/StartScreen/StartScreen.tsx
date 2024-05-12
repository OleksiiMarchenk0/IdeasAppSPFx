import { DefaultButton, Stack } from '@fluentui/react'
import * as React from 'react'

export default function StartScreen(props:any) {
    const {addNewIdea} = props;
  return (
         <>
   <Stack>
      Welcome to Ideas App. Please click on button to add new idea.
      <DefaultButton
          disabled={false}
          onClick={() => addNewIdea()}
          text={"Add an idea"}
          styles={{ root: { marginTop: "15px" } }}
        />

   </Stack>
  </>
  )
}
