import {render,screen} from "@testing-library/react";
import {Great} from "./great";

test("hello",()=>{
    //create Virtuel Dom of Component
   render(<Great/>)
   //verify in the screen element
   const textHello=screen.getByText(/hello/i)
    //where we will search it (in the document)
    expect(textHello).toBeInTheDocument()
})