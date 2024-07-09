
import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { loginAdminService } from '../../services/auth.service';
import { IAuthCred, ILogin, IAuthInitialState } from '../../interfaces/auth';

export const loginAdmin: any = createAsyncThunk('auth/login', async (cred: IAuthCred): Promise<ILogin> => {
    try {
        const response = await loginAdminService(cred);
        return response.data
    } catch (err: any) {
        return err.response.data.message

    }
});

const initialState: IAuthInitialState = {
    token: '',
    user: {
        name: '',
        email: '',
        mobile: '',
        isAdmin: false
    },
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedOut: (state) => {
            state.token = '';
            state.user.name = '';
            state.user.email = '';
            state.user.mobile = '';
            state.user.isAdmin = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginAdmin.pending, (state) => {
            state.loading = true;
        }),
            builder.addCase(loginAdmin.fulfilled, (state, action) => {
                state.token = action.payload.token
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.user.mobile = action.payload.mobile;
                state.user.isAdmin = action.payload.isAdmin;
            }),
            builder.addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
});

export const { loggedOut } = authSlice.actions;

export default authSlice.reducer;
