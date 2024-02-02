import {render,screen} from "@testing-library/react";
import {Great} from "./great";


describe("Great",()=>{
    test("hello all",()=>{
        //create Virtuel Dom of Component
        render(<Great name={"Ben"}/>)
        //verify in the screen element
        const textHello=screen.getByText(/hello/i)
        //where we will search it (in the document)
        expect(textHello).toBeInTheDocument()
    })

    test("hello ben",()=>{
        //create Virtuel Dom of Component
        render(<Great name={"Ben"}/>)
        //verify in the screen element
        const textHello=screen.getByText(/hello/i)
        //where we will search it (in the document)
        expect(textHello).toBeInTheDocument()
    })
})