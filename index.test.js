const { getWeather } = require('./index');

describe('getWeather',()=>{
    it('should give error code 400 if input is not a list',async()=>{
        const result=await getWeather('Mumbai');
        expect(result).toBeDefined();
        expect(result).not.toBeNull();
        expect(result).toHaveProperty('cod','400');
    })

    it('should give error code 404 for incorrect city or zipcode',async()=>{
        const result=await getWeather(['afr']);
        expect(result).toBeDefined();
        expect(result).not.toBeNull();
        for(let i in result){
            expect(result[i]).toHaveProperty('cod','404');
        }   
    })

    it('should give error code 400 for blank city',async()=>{
        const result=await getWeather(['']);
        expect(result).toBeDefined();
        expect(result).not.toBeNull();
        expect(result[0]).toHaveProperty('cod','400');
    })

    it('should give code 200 for the correct  city or zipcode',async()=>{
        const result=await getWeather(['Mumbai', 10001]);
        expect(result).toBeDefined();
        expect(result).not.toBeNull();
        for(let i in result){
            expect(result[i]).toHaveProperty('cod',200);    
        }   
    })
})