const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;
module.exports = ({content})=>{
    return `
    <!DOCTYPE html>
<html>
    <head>
        <title>Weather Cast</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.css">
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places"></script>
        

        
    </head>
     <body>
        <section class="hero is-primary is-bold">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Weather Casting
                  <span class="icon">
                    <i class="fas fa-sun"></i>
                  </span>
                </h1>
              </div>
            </div>
        </section>
    
        <!--Search Section -->

        <div class="field">
            <div class="control has-icons-left">
              <form method = "POST" action="./locaInfo">
              <input id="search" value="" class="input is-primary" type="text" placeholder="Show me the weather in...city, zip, or place">
              </form>
              <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
              </span>
            </div>

        

        </div>

            <!--Date Section-->
            <div class="columns is-desktop has-text-centered">
                <div class="column has-background-info">
                    <form action="/24hours">
                      <button class="button is-info">24 Hours</button>
                    </form>
                </div>
                <div class="column has-background-info">
                    <form action="/weekend">
                        <button class="button is-info">Weekend</button>
                    </form>
                </div>
                <div class="column has-background-info">
                    <form action="/7days">
                        <button class="button is-info">7 Days</button>
                    </form>    
                </div>
                <div class="column has-background-info">
                    <form action="./10days"
                        <button class="button is-info">10 Days</button>
                    </form>    
                </div>
            </div>
            ${content}
            
    </body>
    <script type="text/javascript" src="search.js"></script>
</html>
    `
}