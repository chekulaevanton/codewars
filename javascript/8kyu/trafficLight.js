function updateLight(current) {
  
    let next = {
        'green': 'yellow',
        'yellow': 'red',
        'red': 'green'
    }
    
    return next[current]
}