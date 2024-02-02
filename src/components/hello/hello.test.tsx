import {render,screen} from "@testing-library/react";
import Second from "./Hellos";


describe("Hello",()=>{
    test('hellos to first time',()=>{
        render(<Second name="Benjamin"/>);
        const textSearch=screen.getByText(/hello/i)
        expect(textSearch).toBeInTheDocument()
    })

    test("hello renders a name",()=>{
        render(<Second name="Benjamin" />)
        const textSearch=screen.getByText("Hello Benjamin")
        expect(textSearch).toBeInTheDocument()
    })
})