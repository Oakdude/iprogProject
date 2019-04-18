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

const include = [
  "MAR","DZA", "ZAF", "MUS", "TUN", "CPV", "ETH", "SYC", "NGA", "MDG",
  "COD", "LBY", "GMB", "KEN", "GHA", "TZA", "MLI", "SDN", "SOM", "CIV",
  "ZWE", "SEN", "CMR", "ERI", "UGA", "NAM", "REU", "MOZ", "AGO", "GAB",
  "BFA", "RWA", "GIN", "TCD", "SSD", "MRT", "BWA", "NER", "DJI", "ZMB",
  "SLE", "MWI", "LBR", "TGO", "BEN", "BDI", "SWZ", "COG", "LSO", "GNQ",
  "STP", "EGY", "SOM", "CAF", "SOL", "ESH", "GNB"
]

class BasicMap extends Component {

    handleClick(geography, evt) {
        console.log("Geography data: ", geography.properties.ISO_A3)


    }

  render() {
    return (

      <div style={wrapperStyles}>
         <ComposableMap
           projectionConfig={{ scale: 1200 }}
           width={1400}
           height={1400}
           style={{
             width: "45%",
             height: "auto",
           }}
           >
           <ZoomableGroup center={[ 20, 0 ]} disablePanning>
 <Geographies geography="./world-50m.json">
              {(geographies, projection) => geographies.map((geography, i) => include.indexOf(geography.properties.ISO_A3) !== -1 &&  (
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
