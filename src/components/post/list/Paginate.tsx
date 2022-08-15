import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { AstroComponent } from 'astro/dist/types/runtime/server/render/astro';

export interface PaginationProps{
  page : any,
  astro : string
  
}
export default function BasicPagination(props : PaginationProps) {
  const rawPath = props.astro.href;
  let splitedPath = rawPath.split("/")
  splitedPath.pop()
  const currentPath = rawPath.endsWith("/") ? () => {splitedPath?.pop(); splitedPath.toString()} : splitedPath?.toString().replaceAll(",","/")
  
  return (
    <Stack spacing={2}>
        <Pagination
        hideNextButton
        hidePrevButton
        page={props.page.currentPage}
        onChange={(x) =>{
          try{
            const targetPage = x.target.ariaLabel.split(" ")[3]
            //location.href =`${currentPath}/${targetPage}`
            location.href =`${targetPage}`

          }
          catch{
           // location.href =`./${props.page.currentPage + 1}`
          }
        }}

          count={props.page.lastPage}
          renderItem={(item) => {

            return( <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />)
          }}
        />
    </Stack>
  );
}

function routePage(){

}