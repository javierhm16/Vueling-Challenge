import { Action, State, StateContext } from "@ngxs/store";
import { AirportStateModel } from "./airport.model";
import { AddAirport } from "./airport.actions";

@State<AirportStateModel>({
    name: 'airport',
    defaults: {
        listAirport: null
    }
})

export class AirportState {
    @Action(AddAirport)
    addAirport({ patchState }: StateContext<AirportStateModel>, { payload }: AddAirport) {
        patchState({
            listAirport: payload
        })
    }
}