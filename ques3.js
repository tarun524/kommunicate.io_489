function getUrlParameterValue(url, parameter) {

    let parameters=new URLSearchParams(url);
    return parameters.get(parameter);
    
    
    
    }
