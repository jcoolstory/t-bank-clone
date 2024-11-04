import { currencyFormat } from "../util/format"

describe( "포맷팅 테스트", ()=> {
    test( "문자변환", ()=>{
        expect(currencyFormat(0)).toBe("0원")
    })

    test( "문자변환", ()=>{
        expect(currencyFormat(0,"")).toBe("0")
    })

    test( "문자변환", ()=>{
        expect(currencyFormat(NaN)).toBe("")
    })

    test( "문자변환", ()=>{
        expect(currencyFormat(1231231)).toBe("1,231,231원")
    })
})