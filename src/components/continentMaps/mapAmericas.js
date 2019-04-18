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





const include =   ["AIA", "ATG", "ABW", "BHS", "BRB", "BLZ", "BMU", "BES", "VGB", "CAN", "CYM", "CRI", "CUB", "CUW", "DMA", "DOM", "SLV", "GRL", "GRD", "GLP",
   "GTM", "HTI", "HND", "JAM", "MTQ", "MEX", "SPM", "MSR", "ANT", "KNA", "NIC", "PAN", "PRI", "BES", "BES", "SXM", "KNA", "LCA", "SPM", "VCT",
   "TTO", "TCA", "USA", "VIR", "ARG", "BOL", "BRA", "CHL", "COL", "ECU", "FLK", "GUF", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"]

class BasicMap extends Component {

    handleClick(geography, evt) {
        console.log("Geography data: ", geography)


    }

  render() {
    return (

      <div style={wrapperStyles}>
        <ComposableMap

          projectionConfig={{
            scale: 1800,
            rotation: [-11,0,0],
          }}
          width={3000}
          height={4000}
          style={{
            width: "45%",
            height: "auto",
          }}
          >

          <ZoomableGroup center={[-100,10]} disablePanning>
            <Geographies geography='./world-50m.json'>
              {(geographies, projection) => geographies.map((geography, i) => include.indexOf(geography.properties.ISO_A3) !== -1 &&(
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
