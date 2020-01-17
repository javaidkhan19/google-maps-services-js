import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { version } from "./index";
import { HttpsAgent } from "agentkeepalive";
import {
  directions,
  DirectionsRequest,
  DirectionsResponse
} from "./directions";
import {
  distancematrix,
  DistanceMatrixRequest,
  DistanceMatrixResponse
} from "./distance";
import { elevation, ElevationRequest, ElevationResponse } from "./elevation";
import { geolocate, GelocateRequest, GeolocateResponse } from "./geolocate";
import { timezone, TimeZoneRequest, TimeZoneResponse } from "./timezone";
import { geocode, GeocodeRequest, GeocodeResponse } from "./geocode/geocode";
import {
  reverseGeocode,
  ReverseGeocodeRequest,
  ReverseGeocodeResponse
} from "./geocode/reversegeocode";
import {
  placeAutocomplete,
  PlaceAutocompleteRequest,
  PlaceAutocompleteResponse
} from "./places/autocomplete";
import {
  placeDetails,
  PlaceDetailsRequest,
  PlaceDetailsResponse
} from "./places/details";
import {
  findPlaceFromText,
  FindPlaceFromTextRequest,
  FindPlaceFromTextResponse
} from "./places/findplacefromtext";
import {
  placePhoto,
  PlacePhotoRequest,
  PlacePhotoResponse
} from "./places/photo";
import {
  placesNearby,
  PlacesNearbyRequest,
  PlacesNearbyResponse
} from "./places/placesnearby";
import {
  placeQueryAutocomplete,
  PlaceQueryAutocompleteRequest,
  PlaceQueryAutocompleteResponse
} from "./places/queryautocomplete";
import {
  textSearch,
  TextSearchRequest,
  TextSearchResponse
} from "./places/textsearch";
import {
  nearestRoads,
  NearestRoadsRequest,
  NearestRoadsResponse
} from "./roads/nearestroads";
import {
  snapToRoads,
  SnapToRoadsRequest,
  SnapToRoadsResponse
} from "./roads/snaptoroads";

export const defaultHttpsAgent = new HttpsAgent({ keepAlive: true });
export const defaultTimeout = 10000;
export const userAgent = `google-maps-services-node-${version}`;

const defaultConfig = {
  timeout: defaultTimeout,
  httpsAgent: defaultHttpsAgent,
  headers: { "User-Agent": userAgent }
};

export const defaultAxiosInstance = axios.create(defaultConfig);

export class Client {
  private axiosInstance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    if (Object.keys(config).length) {
      // TODO: use deep merge
      config.headers = Object.assign(
        defaultConfig.headers,
        config.headers || {}
      );
      config = Object.assign(defaultConfig, config);

      this.axiosInstance = axios.create(config);
    } else {
      this.axiosInstance = defaultAxiosInstance;
    }
  }

  directions(request: DirectionsRequest): Promise<DirectionsResponse> {
    return directions(request, this.axiosInstance);
  }

  distancematrix(
    request: DistanceMatrixRequest
  ): Promise<DistanceMatrixResponse> {
    return distancematrix(request, this.axiosInstance);
  }

  elevation(request: ElevationRequest): Promise<ElevationResponse> {
    return elevation(request, this.axiosInstance);
  }

  timezone(request: TimeZoneRequest): Promise<TimeZoneResponse> {
    return timezone(request, this.axiosInstance);
  }
  geolocate(request: GelocateRequest): Promise<GeolocateResponse> {
    return geolocate(request, this.axiosInstance);
  }
  geocode(request: GeocodeRequest): Promise<GeocodeResponse> {
    return geocode(request, this.axiosInstance);
  }

  reverseGeocode(
    request: ReverseGeocodeRequest
  ): Promise<ReverseGeocodeResponse> {
    return reverseGeocode(request, this.axiosInstance);
  }

  placeAutocomplete(
    request: PlaceAutocompleteRequest
  ): Promise<PlaceAutocompleteResponse> {
    return placeAutocomplete(request, this.axiosInstance);
  }

  placeDetails(request: PlaceDetailsRequest): Promise<PlaceDetailsResponse> {
    return placeDetails(request, this.axiosInstance);
  }

  findPlaceFromText(
    request: FindPlaceFromTextRequest
  ): Promise<FindPlaceFromTextResponse> {
    return findPlaceFromText(request, this.axiosInstance);
  }

  placePhoto(request: PlacePhotoRequest): Promise<PlacePhotoResponse> {
    return placePhoto(request, this.axiosInstance);
  }

  placesNearby(request: PlacesNearbyRequest): Promise<PlacesNearbyResponse> {
    return placesNearby(request, this.axiosInstance);
  }

  placeQueryAutocomplete(
    request: PlaceQueryAutocompleteRequest
  ): Promise<PlaceQueryAutocompleteResponse> {
    return placeQueryAutocomplete(request, this.axiosInstance);
  }

  textSearch(request: TextSearchRequest): Promise<TextSearchResponse> {
    return textSearch(request, this.axiosInstance);
  }
  nearestRoads(request: NearestRoadsRequest): Promise<NearestRoadsResponse> {
    return nearestRoads(request, this.axiosInstance);
  }
  snapToRoads(request: SnapToRoadsRequest): Promise<SnapToRoadsResponse> {
    return snapToRoads(request, this.axiosInstance);
  }
}

export {
  DirectionsRequest,
  DirectionsResponse,
  DistanceMatrixRequest,
  DistanceMatrixResponse,
  ElevationRequest,
  ElevationResponse,
  FindPlaceFromTextRequest,
  FindPlaceFromTextResponse,
  GelocateRequest,
  GeocodeRequest,
  GeocodeResponse,
  GeolocateResponse,
  NearestRoadsRequest,
  NearestRoadsResponse,
  PlaceAutocompleteRequest,
  PlaceAutocompleteResponse,
  PlaceDetailsRequest,
  PlaceDetailsResponse,
  PlacePhotoRequest,
  PlacePhotoResponse,
  PlaceQueryAutocompleteRequest,
  PlaceQueryAutocompleteResponse,
  PlacesNearbyRequest,
  PlacesNearbyResponse,
  ReverseGeocodeRequest,
  ReverseGeocodeResponse,
  SnapToRoadsRequest,
  SnapToRoadsResponse,
  TextSearchRequest,
  TextSearchResponse,
  TimeZoneRequest,
  TimeZoneResponse
};