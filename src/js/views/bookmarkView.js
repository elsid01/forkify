import View from "./View";
import icons from 'url:../../img/icons.svg';
import { PreviewView } from "./previewView";

class BookmarkView extends PreviewView{
 _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it';
  _message ='';
  
  addHandlerRender(handler){
    window.addEventListener('load', handler);
  }
}

export default new BookmarkView();