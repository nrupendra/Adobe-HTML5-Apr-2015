SessionStorage
    - Key/Value Store
    - Both key and value should be strings
    - 10MB / per origin
    - Same origin policy applied
    
    - window.sessionStorage
    - APIs
        * setItem(key,value)
        * getItem(key) //=> value
        * removeItem(key)
        * key(index) //=> key
        * clear()
        * length
        
**Important**
The storage is transient, data is lost once the browser shuts down.