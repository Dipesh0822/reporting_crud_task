
const toUser = (user) => ({
    id: user.id,
    email: user.email,
    status: user.status,
    country_code: user.country_code,
    created_at: user.created_at,
    updated_at: user.updated_at
});

module.exports = toUser;