---
title: "Zoom Controls"
slug: "zoom-controls"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/3447c3-zoom-controls"
extractedAt: "2026-02-21T21:57:56.007Z"
---

## Introduction

Use a [Button Group](https://www.lightningdesignsystem.com/2e1ef8501/p/30363d) to create a zoom tool that allows users to magnify or minimize the screen view, zooming in or out on items viewed.

The preferred mode is **incremental zoom**, a button group using the minus, plus, and expand/contract icons. Users can click to incrementally zoom out (-) or zoom in (+), and can toggle between zoom-to-fit (contract) and zoom-to-100% (expand) views of the canvas.



**Note:** Use [utility icons](https://v1.lightningdesignsystem.com/icons/#utility): dash, expand_alt, contract_alt, add**.**



Start using our Design Kits



  

  
    
      
        
          
        
      
      
        
      
      
    
    
  








  
    
    
    
  

[Open in Figma](https://www.figma.com/community/file/1415890669347272207)Use a Button Group to create a zoom tool that allows users to magnify or minimize the screen view, zooming in or out on items viewed.

The preferred mode is incremental zoom, a button group using the minus, plus, and expand/contract icons. Users can click to incrementally zoom out (-) or zoom in (+), and can toggle between zoom-to-fit (contract) and zoom-to-100% (expand) views of the canvas.

Note: Use utility icons: dash, expand_alt, contract_alt, add.

### Start using our Design Kits

Open in Figma

## Usage

When first opening a record, users view the canvas at 100%, with the first node in a workflow at the upper left of the canvas. Zooms in and out are based on the current center point of the canvas in view; users can pan to shift the center point.

If a user clicks on a node or other canvas element, that element becomes the center point of any zooming action.

- Place the zoom button group inside the canvas, ideally at the bottom right, as shown below.
- Set canvas zoom speed at 250ms per increment.
- When maximum or minimum zoom threshold is reached, disable the corresponding - or + button.
Zoom button group shown with zoom-to-100% option


    
    
  








  
    
    
    
  



  

  
    
      
        
      
      
      Zoom button group shown with zoom-to-fit optionZoom button group shown with zoom-to-100% option

Zoom button group shown with zoom-to-fit option

Ideal placement of incremental zoom button group at the bottom right of the canvas

## Toggle Zoom Variant

Toggle zoom lets users switch between two views, 100%, and zoom-to-fit. If zoom functionality is controlled in the toolbar, use toggle zoom.

Toolbar zoom button toggles between 100% and zoom-to-fit

