import * as React from 'react';
import NewIdea from './NewIdea/NewIdea';
import StartScreen from './StartScreen/StartScreen';


export default function IdeasPortalWebPart(props:any) {
  const {context} = props;
  const [showNewIdea, setShowNewIdea] = React.useState<boolean>(false);
  const addNewIdea=()=> {
    setShowNewIdea(true)
  }
  return (
    <div>
    {showNewIdea? (<NewIdea context = {context}/> ) : <StartScreen addNewIdea={addNewIdea} />}

  </div>
 
  )
}


