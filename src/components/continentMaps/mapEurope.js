import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import flag from "../images/bunchuhflags.jpg"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

class BasicMap extends Component {

    handleClick(geography, evt) {
        console.log("Geography data: ", geography)


    }

  render() {
    return (

      <div style={wrapperStyles}>
        <ComposableMap

          projectionConfig={{
            scale: 4500,
            rotation: [-11,0,0],
          }}
          width={3000}
          height={3400}
          style={{
            width: "50%",
            height: "auto",
          }}
          >

          <ZoomableGroup center={[15, 55]} disablePanning>
            <Geographies geography='./world-50m.json'>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}  style={{
                  default: {
                    fill: "#ECEFF1",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                  hover: {
                    fill: "#607D8B",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#FF5722",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                }}
                  onClick={this.handleClick}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default BasicMap
