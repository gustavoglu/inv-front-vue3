<template>
  <div>
    <header class="header-container">
      <div class="header-content">
        <img src="../assets/logo.svg" alt="" />
        <div>
          <button @click="modal = !modal">Cadastrar inventario</button>
          <button class="logout-button">
            <img src="../assets/logout.svg" alt="logout" />
          </button>
        </div>
      </div>
    </header>
    <main class="table-main">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Local</th>
              <th>Volume</th>
              <th>Lote</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <div v-if="inventorys && inventorys.length > 0">
              <tr v-for="(inventory, index) in inventorys" :key="index">
                <td>{inventory.place}</td>
                <td>{inventory.volume}</td>
                <td>{inventory.batch}</td>
                <td>{inventory.quantity}</td>
                <td className="icon-td">
                  <button>
                    <img src="../assets/edit.svg" alt="Deletar inventario" />
                  </button>

                  <button>
                    <img src="../assets/delete.svg" alt="Deletar inventario" />
                  </button>
                </td>
              </tr>
            </div>

            <tr v-else>
              <td>Nenhum inventario encontrado.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
    <modal v-model="modal" title="Cadastrar Inventario"></modal>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const inventorys = ref([]);
    const modal = ref(false);
    return {
      inventorys,
      modal,
    };
  },
};
</script>

<style lang="scss" >
.header-container {
  background: var(--background);
}

.header-content {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 30px;

    button {
      font-size: 1rem;
      color: #fff;
      background: var(--purple-light);
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s;

      @media (max-width: 767px) {
        padding: 0 1.2rem;
      }

      &:hover {
        filter: brightness(1.1);
      }
    }

    .logout-button {
      font-size: 1rem;
      background: transparent !important;
      border: 0;
      padding: 0 1rem;

      img {
        width: 30px;
      }

      @media (max-width: 767px) {
        padding: 0 1.2rem;
      }
    }
  }
}

.table-main {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  .table-container {
    margin-top: 3.5rem;
    overflow-x: auto;
    table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th {
        color: var(--blue);
        font-weight: bold;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
        min-width: 12.5rem;
        text-transform: uppercase;
      }

      td {
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-title);

        &.icon-td {
          width: 50px;
          min-width: 50px;
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;

          button {
            display: flex;
          }
        }

        button {
          border: 0;
          background: transparent;
          cursor: pointer;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.6);
          }
        }
      }
    }
  }
}
</style>

