import { useQuery } from "@apollo/client";
import { Chip, CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { EditOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { COMP_PHASES } from "../../queries/comp_phases";
import { CompPhaseType } from "../../types/comp_phase";

import { CompoundPhasesModal } from "./CompoundPhasesModal";

export default function PhasesWidget({ record = {}, source }: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const [compPhases, setCompPhases] = useState<CompPhaseType[]>([]);

  const { data, refetch, loading } = useQuery(COMP_PHASES, {
    variables: { compound_id: record.id },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    console.log("%c Mo2Log data changes ", "background: #bada55");
    setCompPhases(data?.comp_phases as CompPhaseType[]);
  }, [data]);

  const closeModal = async () => {
    console.log("closing");
    setModalOpen(false);
    const what = await refetch();
    console.log("%c Mo2Log what ", "background: #bada55", what);
  };
  /*
    useEffect(() => {
      if (isOpen) {
        refetch();
      }
    }, []);
    */
  if (!record.id) return <></>;
  return (
    <>
      {loading && <CircularProgress />}
      <div>
        {compPhases &&
          compPhases.map((phase) => (
            <Chip label={phase.phase_name?.ar} style={{ margin: ".5em" }} />
          ))}
      </div>
      <CompoundPhasesModal
        compound_id={record.id}
        isOpen={modalOpen}
        comp_phases={compPhases}
        onHandleClose={closeModal}
      />
      <Button onClick={() => setModalOpen(!modalOpen)} variant="contained">
        <EditOutlined /> <span>&nbsp;</span> Phases
      </Button>
    </>
  );
}
