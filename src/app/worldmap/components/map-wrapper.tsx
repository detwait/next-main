'use client';

import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';
import { GOOGLE_API_KEY } from '../../../config';

const libraries = ['places', 'drawing', 'geometry'];

export function MapWrapper({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_API_KEY as string,
    libraries: libraries as Libraries,
  });

  if(loadError) return <p>Encountered error while loading google maps</p>

  if(!scriptLoaded) return <p>Map Script is loading ...</p>

  return children;
}