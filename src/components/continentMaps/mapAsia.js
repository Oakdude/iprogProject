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

const include =

  ["AFG", "ARM", "AZE", "BHR", "BGD", "BTN", "BRN", "KHM", "CHN", "CXR", "CCK", "IOT", "GEO",
   "HKG", "IND", "IDN", "IRN", "IRQ", "ISR", "JPN", "JOR", "KAZ", "KWT", "KGZ", "LAO", "LBN",
    "MAC", "MYS", "MDV", "MNG", "MMR", "NPL", "PRK", "OMN", "PAK", "PSE", "PHL", "QAT", "SAU",
     "SGP", "KOR", "LKA", "SYR", "TWN", "TJK", "THA", "TUR", "TKM", "ARE", "UZB", "VNM", "YEM", "RUS"]

class BasicMap extends Component {
  render() {
    return (

      <div style={wrapperStyles}>
        <ComposableMap

          projectionConfig={{
            scale: 2000,
            rotation: [-11,0,0],
          }}
          width={3500}
          height={3000}
          style={{
            width: "70%",
            height: "auto",
          }}
          >

          <ZoomableGroup center={[80,30]} disablePanning>
            <Geographies geography='./world-50m.json'>
            {(geographies, projection) => geographies.map((geography, i) => include.indexOf(geography.properties.ISO_A3) !== -1 && (
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
