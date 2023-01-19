import { FlexBox } from "../../styles"
import { Button } from "../atoms"
import { SelectGroup } from "../molecules"

function SearcherBar() {
  const handleChange = (e) => {
    console.log("hola")
  }

  const handleClick = (e) => {
    console.log("hola")
  }

  return (
    <FlexBox direction="row" gap="1rem" align="center">
      <SelectGroup
        id="type"
        label="Tipo"
        defaultText="Piso, chalet o garaje..."
        hidden={false}
        // aquí debo importar de state options
        options={[
          { value: "piso", text: "Piso" },
          { value: "garaje", text: "Garaje" },
          { value: "chalets", text: "Chalets" },
        ]}
      />

      <SelectGroup
        id="ciudad"
        label="Ciudad"
        defaultText="Madrid, Barcelona o Zaragoza..."
        hidden={false}
        // aquí debo importar de state options
        options={[
          { value: "barcelona", text: "Barcelona" },
          { value: "madrid", text: "Madrid" },
          { value: "zaragoza", text: "Zaragoza" },
        ]}
      />
      <Button
        icon="search"
        iconStyles={{
          fill: 0,
          size: 20,
        }}
        className="blue-gradient"
        buttonStyles={{
          width: "30px",
          height: "30px",
        }}
        onClick={handleClick}
      />
    </FlexBox>
  )
}

export default SearcherBar
