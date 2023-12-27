
import styled from "styled-components"
const NumberSelector = ({ error, seterror, selectNumber, setSelectNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const numberSelectorHandler = (value) => {
        setSelectNumber(value)
        seterror("");
    }
    return (
        <NumberSelectorstyle>
            <p className="error">{error}</p>
            <div className="flex">
                {

                    arrNumber.map((value, i) => (<Box key={i}
                        isSelected={value == selectNumber}
                        onClick={() => numberSelectorHandler(value)}>{value}</Box>))
                }

            </div>
            <p>Select Number</p>
        </NumberSelectorstyle>
    )
}

export default NumberSelector

const Box = styled.div`
    
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items:center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
`
const NumberSelectorstyle = styled.div`
    display: flex;
        flex-direction: column;
        align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700;
}
.error {
    color: red;
  }

`