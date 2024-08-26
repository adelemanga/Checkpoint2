import { Country } from '../entities/country';
import { Query, Resolver, Mutation, Arg, InputType, Field } from "type-graphql";


@InputType()
export class NewCountryInput implements Partial<Country> {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  amoji: string;

  @Field()
  continent: string;
}



@Resolver(Country)
class CountryResolver {
  countryRepository: any;
  @Query(() => [Country])
  async getAllCountries() {
    const countries = await Country.find();
    return countries;
  }

  @Mutation(() => Country)
  async createNewCountry(@Arg("data") newCountryData: NewCountryInput) {
    const resultFromSave = await Country.save({
      ...newCountryData,
    })

    return resultFromSave;
  }
}

export default CountryResolver;
